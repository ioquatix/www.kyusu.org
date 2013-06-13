// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Function.prototype.bind||(Function.prototype.bind=function(a){var b=Array.prototype.slice.call(arguments,1),c=this;return function(){return c.apply(a,b)}});function ResourceLoader(a){this.dependencies={};this.loading={};this.loader=a}ResourceLoader.prototype._finish=function(a){var b=this.dependencies[a];if(b){a=this._loaded.bind(this,a);for(var c=0;c<b.length;c+=1)a=this.get.bind(this,b[c],a);a()}else this._loaded(a)};
ResourceLoader.prototype._loaded=function(a){var b=this[a],c=this.loading[a];this.loading[a]=null;if(b)for(a=0;a<c.length;a+=1)c[a](b);else alert("ResourceLoader: Could not load resource named "+a)};ResourceLoader.prototype.dependency=function(a,b){if(!this[b]||this.loading[name])this.dependencies[a]?this.dependencies[a].push(b):this.dependencies[a]=[b]};
ResourceLoader.prototype.get=function(a,b){this.loading[a]?this.loading[a].push(b):this[a]?b(this[a]):(this.loading[a]=[b],this.loader(a,this._finish.bind(this,a)))};
var Syntax={root:null,aliases:{},styles:{},themes:{},lib:{},defaultOptions:{cacheScripts:!0,cacheStyleSheets:!0,theme:"base"},brushes:new ResourceLoader(function(a,b){a=Syntax.aliases[a]||a;Syntax.getResource("jquery.syntax.brush",a,b)}),layouts:new ResourceLoader(function(a,b){Syntax.getResource("jquery.syntax.layout",a,b)}),loader:new ResourceLoader(function(a,b){Syntax.getResource("jquery.syntax",a,b)}),getStyles:function(a){var b=jQuery("<link>");jQuery("head").append(b);Syntax.defaultOptions.cacheStyleSheets||
(a=a+"?"+Math.random());b.attr({rel:"stylesheet",type:"text/css",href:a})},getScript:function(a,b){var c=document.createElement("script");c.onreadystatechange=function(){if(this.onload&&("loaded"==this.readyState||"complete"==this.readyState))this.onload(),this.onload=null};c.onload=b;c.type="text/javascript";Syntax.defaultOptions.cacheScripts||(a=a+"?"+Math.random());c.src=a;document.getElementsByTagName("head")[0].appendChild(c)},getResource:function(a,b,c){a=a+"."+b;if(b=this.styles[a])for(var d=
0;d<b.length;d+=1)this.getStyles(this.root+b[d]);Syntax.getScript(this.root+a+".js",c)},alias:function(a,b){Syntax.aliases[a]=a;for(var c=0;c<b.length;c+=1)Syntax.aliases[b[c]]=a},brushAliases:function(a){var b=[],c;for(c in Syntax.aliases)Syntax.aliases[c]===a&&b.push(c);return b},brushNames:function(){var a=[],b;for(b in Syntax.aliases)b===Syntax.aliases[b]&&a.push(b);return a},extractBrushName:function(a){a=a.toLowerCase();var b=a.match(/brush-([\S]+)/);if(b)return b[1];a=a.split(/ /);if(-1!==
jQuery.inArray("syntax",a))for(b=0;b<a.length;b+=1){var c=Syntax.aliases[a[b]];if(c)return c}return null},detectRoot:function(){if(null==Syntax.root){var a=jQuery("script").filter(function(){return this.src.match(/jquery\.syntax/)}).get(0);if(a&&(a=a.src.match(/.*\//)))Syntax.root=a[0]}},log:function(){"undefined"!=typeof console&&console.log?console.log.apply(console,arguments):window.console&&window.console.log&&window.console.log.apply(window.console,arguments)}};
jQuery.fn.syntax=function(a,b){Syntax.detectRoot();var c=this;Syntax.loader.get("core",function(){Syntax.highlight(c,a,b)})};
jQuery.syntax=function(a,b){a=a||{};var c=a.context;a.root?Syntax.root=a.root:Syntax.detectRoot();a=jQuery.extend(Syntax.defaultOptions,a);a.blockSelector=a.blockSelector||"pre.syntax:not(.highlighted)";a.inlineSelector=a.inlineSelector||"code.syntax:not(.highlighted)";a.blockLayout=a.blockLayout||"list";a.inlineLayout=a.inlineLayout||"inline";"undefined"==typeof a.replace&&(a.replace=!0);jQuery(a.blockSelector,c).each(function(){jQuery(this).syntax(jQuery.extend({},a,{brush:Syntax.extractBrushName(this.className),
layout:a.blockLayout}),b)});jQuery(a.inlineSelector,c).each(function(){jQuery(this).syntax(jQuery.extend({},a,{brush:Syntax.extractBrushName(this.className),layout:a.inlineLayout}),b)})};
