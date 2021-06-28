# host-file
The `host-file` is a huge domain (server / website) list of ads providers and adult content providers. back then I had a network management system on my internet. I use this list to block ads from my devices. ad domains and adult domains are in separate files, if you just want to block the ads it is your choice.

## Usage
We just going to use this domain list by redirect the web request to somewhere that doesn't exist. when some app or website try to show you an ad, it doesn't get anything form their serves.  
if you have a network system that similar to what I had, you should know how to use this. *just do your thing...*  
even if you don't have anything like that, anyone can use this. we are going to use the [hosts file](https://en.wikipedia.org/wiki/Hosts_%28file%29).
it should located at,

OS | Location
-|-
Apple, Android, Linux and all the Unix | /etc/hosts
Windows | C:\\Windows\\System32\\drivers\\etc\\hosts

Don't forget to **backup the original file** before you modify it. (just copy the `hosts` file to `hosts.backup`) if anything goes wrong you can recover it. Then just replace the file. if it doesn't work, try to restart after you replace the file. devices like Android takes too much time to remove the ads, because they save the ads on your phones and show them over and over. after you done this new ads won't able get through. It might take some time to "timeout" the old ads if they already on your device, you also can try to clear the cache but I'm not sure about that. If you can't replace the file that means your system is protecting it, try to disable the anti-virus software and try with the administrator / root access. most of android required to "root" the phone for do this.<br>
!["The warnings come after the spells"](https://i.imgur.com/ehJ3bpJ.gif)<br>
as I told you before, you should backup the original file. we are changing the system file here, so there could be so much problem if you don't do it right. this thing will affect the apps that depends on network system. you should know, I didn't meant only the "online apps". few apps on your device use network system as a communicate system. This thing could also affect for the web servers of both ad providers' and ad showers'. if you are a "non-root" android user, you should double think about the "root". if anything goes wrong at the "root", you might never able to use your phone again. you also should know that, blocking ads might be illegal sometimes. you could get banner or blocked for doing this.  
*use at your own risk*

## Links
Source: <https://github.com/IC-Tech/host-file><br>
raw ad servers: <https://github.com/IC-Tech/host-file/raw/master/ad_servers.txt><br>
raw adult servers: <https://github.com/IC-Tech/host-file/raw/master/adult_servers.txt><br>
raw ad and adult servers: <https://github.com/IC-Tech/host-file/raw/master/ad_and_adult_servers.txt>

## More
[Contact or Questions](mailto:imesh1chamara@gmail.com)
