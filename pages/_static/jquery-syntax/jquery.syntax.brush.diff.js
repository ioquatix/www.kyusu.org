// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("diff",function(a){a.push({pattern:/^\+\+\+.*$/gm,klass:"add"});a.push({pattern:/^\-\-\-.*$/gm,klass:"del"});a.push({pattern:/^@@.*@@/gm,klass:"offset"});a.push({pattern:/^\+[^\+]{1}.*$/gm,klass:"insert"});a.push({pattern:/^\-[^\-]{1}.*$/gm,klass:"remove"});a.postprocess=function(a,b,c){$(".insert",b).closest(".source").addClass("insert-line");$(".remove",b).closest(".source").addClass("remove-line");$(".offset",b).closest(".source").addClass("offset-line");return b}});
