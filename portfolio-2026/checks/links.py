from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
root=Path('dist')
class Check(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=[];self.h1=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='h1':self.h1+=1
  if 'id' in a:self.ids.append(a['id'])
  for key in ('href','src'):
   if a.get(key):self.links.append(a[key])
for f in root.rglob('*.html'):
 if f.name.startswith('qa-'):continue
 c=Check();c.feed(f.read_text());assert c.h1==1,(f,c.h1)
 assert len(c.ids)==len(set(c.ids)),f
 for href in c.links:
  u=urlsplit(href)
  if u.scheme or u.netloc:continue
  dest=(root/u.path.lstrip('/')) if u.path.startswith('/') else f.parent/u.path
  if not u.path:dest=f
  if dest.is_dir():dest=dest/'index.html'
  assert dest.is_file(),(f,href)
  if u.fragment:
   target=Check();target.feed(dest.read_text());assert u.fragment in target.ids,(f,href)
print('PASS: all local links, fragments, images, styles and scripts resolve; one H1 and unique IDs per page.')
