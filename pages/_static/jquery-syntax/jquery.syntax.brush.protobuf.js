// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("protobuf",function(a){a.push("enum extend extensions group import max message option package returns rpc service syntax to default".split(" "),{klass:"keyword"});a.push(["true","false"],{klass:"constant"});a.push("bool bytes double fixed32 fixed64 float int32 int64 sfixed32 sfixed64 sint32 sint64 string uint32 uint64".split(" "),{klass:"type"});a.push(["optional","required","repeated"],{klass:"access"});a.push(Syntax.lib.camelCaseType);a.push({pattern:/\s+(\w+)\s*=\s*\d+/g,matches:Syntax.extractMatches({klass:"variable"})});
a.push(Syntax.lib.cStyleComment);a.push(Syntax.lib.webLink);a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);a.push(Syntax.lib.stringEscape);a.push(Syntax.lib.decimalNumber);a.push(Syntax.lib.hexNumber)});
