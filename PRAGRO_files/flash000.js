// Code to check if browser supports the correct version of Macromedia Flash
// and function to draw a Flash 
var MM_FlashCanPlay = false;
var MM_contentVersion = 5;
function drawFlash(flashFile, wd, ht, staticImage) {
	var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
	if ( plugin ) {
			var words = navigator.plugins["Shockwave Flash"].description.split(" ");
		    for (var i = 0; i < words.length; ++i)
		    {
			if (isNaN(parseInt(words[i])))
			continue;
			var MM_PluginVersion = words[i]; 
		    }
		MM_FlashCanPlay = MM_PluginVersion >= MM_contentVersion;
	}
	else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 
	   && (navigator.appVersion.indexOf("Win") != -1)) {
		document.write('<scr' + 'ipt language="VBScript" type="text/vbscript" \> \n'); //FS hide this from IE4.5 Mac by splitting the tag
		document.write('on error resume next \n');
		document.write('MM_FlashCanPlay = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & MM_contentVersion)))\n');
		document.write('</scr' + 'ipt\> \n');
	}
	if ( MM_FlashCanPlay ) {
		document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
		document.write('  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" ');
		document.write(' id="banner" width="' + wd + '" height="'+ ht + '" align="">');
		document.write(' <param name="movie" value="' + flashFile + '"> <param name="menu" value="false"> <param name="quality" value="high"> <param name="bgcolor" value="#FFFFFF"> <param name="scale" value="exactfit"> '); 
		document.write(' <embed src="' + flashFile + '" menu="false" quality="high" bgcolor="#FFFFFF"  ');
		document.write(' swLiveConnect="FALSE" width="'+ wd +'" height="'+ ht +'" name="banner" align="" scale="exactfit"');
		document.write(' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">');
		document.write(' </embed>');
		document.write(' </object>');
	} else{
		document.write(staticImage);
	}
}
