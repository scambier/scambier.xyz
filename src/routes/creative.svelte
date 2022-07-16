<script lang="ts">
	import ExternalLink from '../components/ExternalLink.svelte';
	import TitleH2 from '../components/title-h2.svelte';

	const tweetcarts = [
		{
			gif: 'running.gif',
			code: `r=rectfill
::_::
x=t()
?"⁶1⁶cd⁶!5f2c³"
y=min(-cos(x)*10,4)
u=-x%1<<7
?"ᶜ7⁶.\\0\\0\\0\\0"..(split"\\0⁶⁶⁶,⁶⁶⁶⁶,⁶ᵉᵉ⁵,⁶ᵉᶠ⁸,⁶⁷⁷⁶,⁶⁷ᵉ⁵,⁶⁷ᶠ⁸")[x*16%7\\1+1],28,y+23
r(u-64,39-y,u,64,5)
circfill(2,5,9,8)
for i=3,57,9 do r(u-5-i,50-y,u-i,58-y,12) end
goto _`
		},
		{
			gif: 'points.gif',
			code: `pal({7,13,-3,2,-14},1)w=128n=20p={}r=rnd
for i=0,n do
p[i]={x=r(w),y=r(w),a=r(2)-1,b=r(4)-2}end
::_::cls()for i=0,n do
q=p[i]q.x=(q.x+q.a)%w
q.y=(q.y+q.b)%w
for j=i,n do
o=p[j]x=o.x-q.x
y=o.y-q.y
d=x*x+y*y
if(d<750)line(q.x,q.y,o.x,o.y,d/150+1)end
pset(q.x,q.y,1)end
flip()goto _`
		},
		{
			gif: 'pulse.gif',
			code: `_set_fps(60)
pal({7,12,-4,-3,-11,-15,1},1) camera(-64,-64)
::🅾️:: cls() i=0
for y=-44,54,4 do i+=2
  for x=-64+(i%4),64,4 do
    a=x/80
    b=y/64
    dist=-(a*a+b*b)/2
    z=cos(-sin(t()*.15+dist/3))*10
    pset(x,y+z*1.2,((z+10)/18)*6+1)
  end
end
flip()
goto 🅾️`
		},
		{
			gif: 'sin_bars.gif',
			code: `pal({-13,3,-5,11,-6},1)
::_::
 cls()
 for i=0,128,4 do
  a=sin(i*t()/2/128+t()*.25)*20
  b=cos(i*t()/4/128+t()*.3)*20
  line(
   i,
   40+a,
   i,
   80+b,
   i/4%5+1)
 end
 flip()
goto _`
		},
		{
			gif: 'sunrect.gif',
			code: `l=line
pal({1,-15,-13,3,-5,11,-6,10,9,-7,8,-8},1)
b,c,r=64,64,60
::_::
cls()
for i=1,12 do
a=i*.041
x,y=b+cos(a)*r,c+sin(a)*r
u,v=b+cos(a+t()/5)*r,c+sin(a+.5+t()/5)*r
m,n=x-u,y-v
p=4/sqrt(m^2+n^2)
m*=p
n*=p
l(x,y,u,v,i)l(u+n,v-m)l(x+n,y-m)l(x,y)
end flip() goto _`
		},
		{
			gif: 'setting_sun.gif',
			code: `pal({10,-7,8,-7,10,14,1},1)
::_::w=40for i=0,3000do y=rnd(128)pset(rnd(128),y+rnd(20)-10,y/64+6)end
rectfill(0,0,128,64,14)
for y=1,79do
r=(w-y)/w
a=atan2(r,-sqrt(1-r*r))
x=sin(a)*w
c=y/70*4+1
m=y/6*(sin(x*x/160+t()/4))*(50-y)/40
p=y+24+m
line(64+x,p,64-x,p,c)end
flip()goto _`
		}
	] as const;
</script>

<TitleH2>Tweetcarts</TitleH2>
<p>
	Tweetcarts are <ExternalLink href="https://www.lexaloffle.com/pico-8.php">PICO-8</ExternalLink> programs
	that are written in 280 characters or less, so that they can fit in a tweet.
</p>
<p>
	Hover or touch the images to see the code. If you have a copy of PICO-8 you can paste it directly
	and see it run.
</p>

<div class="flex flex-wrap gap-2 justify-center items-center w-full">
	{#each tweetcarts as cart}
		<span class="relative">
			<img src={`images/tweetcarts/${cart.gif}`} />
			<pre
				class="absolute top-0 left-0 w-full max-w-full h-full whitespace-pre-wrap break-words bg-neutral-900/80 opacity-0 hover:opacity-100 duration-500">{cart.code}</pre>
		</span>
	{/each}
</div>
