// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.layouts.table=function(e,k,l){var c=jQuery('<table class="syntax highlighted"></table>'),b=null,a=null;e=null;var d=1,h=document.createElement("tbody"),g=jQuery('<div class="toolbar"></div>'),f=l.clone();f.addClass("raw syntax highlighted");k.children().each(function(){b=document.createElement("tr");b.className="line ln"+d;d%2&&(b.className+=" alt");a=document.createElement("td");a.className="number";number=document.createElement("span");number.innerHTML=d;a.appendChild(number);b.appendChild(a);
a=document.createElement("td");a.className="source";a.appendChild(this);b.appendChild(a);h.appendChild(b);d+=1});c.append(h);e=jQuery('<a href="#">View Raw Code</a>');e.click(function(a){a.preventDefault();jQuery(c).is(":visible")?(f.height(jQuery(c).height()),jQuery(c).replaceWith(f)):jQuery(f).replaceWith(c)});g.append(e);g.append('<a href="http://www.oriontransfer.co.nz/software/jquery-syntax" target="oriontransfer">?</a>');return jQuery('<div class="syntax-container">').append(g).append(c)};
