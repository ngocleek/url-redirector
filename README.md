# URL Redirector

# Problem
I am working with Plex Live TV and found some IPTV providers but I only can get the temporary link that works for 24-48 hours. To solve this problem this idea came up. I can get the temporary link and send it to Plex. 

## Install

>git clone https://github.com/ngocleek/url-redirector.git
>cd url-redirector
>npm install

Docker
>docker-compose up
>
## Parameters

**url**: URL contains the destination link
**type**: `json` or `text`
**key**: Key of json object `(if type is json)`
**regex**: Regular Expression that match the link
**regexIndex**: Index of the regex contains the link`(if type is text)`

## Examples

With Json
![enter image description here](https://raw.githubusercontent.com/ngocleek/url-redirector/main/example-json.jpg)
http://localhost:34401/?type=json&key=m3u8_url&url=https://player-api.new.livestream.com/accounts/27740027/events/9163789/stream_info

With Text
![enter image description here](https://raw.githubusercontent.com/ngocleek/url-redirector/main/example-text.jpg)
http://localhost:34401/?regex=playfp2\(%27(.*?)%27,%27(.*?)%27,%27(.*?)%27\)&regexIndex=2&url=https://www.vietchannels.com/watch2.php?id=510
