// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46320){
var map__46321 = p__46320;
var map__46321__$1 = ((((!((map__46321 == null)))?(((((map__46321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46321):map__46321);
var m = map__46321__$1;
var n = cljs.core.get.call(null,map__46321__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46323_46347 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46324_46348 = null;
var count__46325_46349 = (0);
var i__46326_46350 = (0);
while(true){
if((i__46326_46350 < count__46325_46349)){
var f_46351 = cljs.core._nth.call(null,chunk__46324_46348,i__46326_46350);
cljs.core.println.call(null,"  ",f_46351);


var G__46352 = seq__46323_46347;
var G__46353 = chunk__46324_46348;
var G__46354 = count__46325_46349;
var G__46355 = (i__46326_46350 + (1));
seq__46323_46347 = G__46352;
chunk__46324_46348 = G__46353;
count__46325_46349 = G__46354;
i__46326_46350 = G__46355;
continue;
} else {
var temp__5457__auto___46356 = cljs.core.seq.call(null,seq__46323_46347);
if(temp__5457__auto___46356){
var seq__46323_46357__$1 = temp__5457__auto___46356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46323_46357__$1)){
var c__4319__auto___46358 = cljs.core.chunk_first.call(null,seq__46323_46357__$1);
var G__46359 = cljs.core.chunk_rest.call(null,seq__46323_46357__$1);
var G__46360 = c__4319__auto___46358;
var G__46361 = cljs.core.count.call(null,c__4319__auto___46358);
var G__46362 = (0);
seq__46323_46347 = G__46359;
chunk__46324_46348 = G__46360;
count__46325_46349 = G__46361;
i__46326_46350 = G__46362;
continue;
} else {
var f_46363 = cljs.core.first.call(null,seq__46323_46357__$1);
cljs.core.println.call(null,"  ",f_46363);


var G__46364 = cljs.core.next.call(null,seq__46323_46357__$1);
var G__46365 = null;
var G__46366 = (0);
var G__46367 = (0);
seq__46323_46347 = G__46364;
chunk__46324_46348 = G__46365;
count__46325_46349 = G__46366;
i__46326_46350 = G__46367;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46368 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46368);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46368)))?cljs.core.second.call(null,arglists_46368):arglists_46368));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46327_46369 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46328_46370 = null;
var count__46329_46371 = (0);
var i__46330_46372 = (0);
while(true){
if((i__46330_46372 < count__46329_46371)){
var vec__46331_46373 = cljs.core._nth.call(null,chunk__46328_46370,i__46330_46372);
var name_46374 = cljs.core.nth.call(null,vec__46331_46373,(0),null);
var map__46334_46375 = cljs.core.nth.call(null,vec__46331_46373,(1),null);
var map__46334_46376__$1 = ((((!((map__46334_46375 == null)))?(((((map__46334_46375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46334_46375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46334_46375):map__46334_46375);
var doc_46377 = cljs.core.get.call(null,map__46334_46376__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46378 = cljs.core.get.call(null,map__46334_46376__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46374);

cljs.core.println.call(null," ",arglists_46378);

if(cljs.core.truth_(doc_46377)){
cljs.core.println.call(null," ",doc_46377);
} else {
}


var G__46379 = seq__46327_46369;
var G__46380 = chunk__46328_46370;
var G__46381 = count__46329_46371;
var G__46382 = (i__46330_46372 + (1));
seq__46327_46369 = G__46379;
chunk__46328_46370 = G__46380;
count__46329_46371 = G__46381;
i__46330_46372 = G__46382;
continue;
} else {
var temp__5457__auto___46383 = cljs.core.seq.call(null,seq__46327_46369);
if(temp__5457__auto___46383){
var seq__46327_46384__$1 = temp__5457__auto___46383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46327_46384__$1)){
var c__4319__auto___46385 = cljs.core.chunk_first.call(null,seq__46327_46384__$1);
var G__46386 = cljs.core.chunk_rest.call(null,seq__46327_46384__$1);
var G__46387 = c__4319__auto___46385;
var G__46388 = cljs.core.count.call(null,c__4319__auto___46385);
var G__46389 = (0);
seq__46327_46369 = G__46386;
chunk__46328_46370 = G__46387;
count__46329_46371 = G__46388;
i__46330_46372 = G__46389;
continue;
} else {
var vec__46338_46390 = cljs.core.first.call(null,seq__46327_46384__$1);
var name_46391 = cljs.core.nth.call(null,vec__46338_46390,(0),null);
var map__46341_46392 = cljs.core.nth.call(null,vec__46338_46390,(1),null);
var map__46341_46393__$1 = ((((!((map__46341_46392 == null)))?(((((map__46341_46392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46341_46392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46341_46392):map__46341_46392);
var doc_46394 = cljs.core.get.call(null,map__46341_46393__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46395 = cljs.core.get.call(null,map__46341_46393__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46391);

cljs.core.println.call(null," ",arglists_46395);

if(cljs.core.truth_(doc_46394)){
cljs.core.println.call(null," ",doc_46394);
} else {
}


var G__46396 = cljs.core.next.call(null,seq__46327_46384__$1);
var G__46397 = null;
var G__46398 = (0);
var G__46399 = (0);
seq__46327_46369 = G__46396;
chunk__46328_46370 = G__46397;
count__46329_46371 = G__46398;
i__46330_46372 = G__46399;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__46343 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46344 = null;
var count__46345 = (0);
var i__46346 = (0);
while(true){
if((i__46346 < count__46345)){
var role = cljs.core._nth.call(null,chunk__46344,i__46346);
var temp__5457__auto___46400__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___46400__$1)){
var spec_46401 = temp__5457__auto___46400__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46401));
} else {
}


var G__46402 = seq__46343;
var G__46403 = chunk__46344;
var G__46404 = count__46345;
var G__46405 = (i__46346 + (1));
seq__46343 = G__46402;
chunk__46344 = G__46403;
count__46345 = G__46404;
i__46346 = G__46405;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__46343);
if(temp__5457__auto____$1){
var seq__46343__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46343__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__46343__$1);
var G__46406 = cljs.core.chunk_rest.call(null,seq__46343__$1);
var G__46407 = c__4319__auto__;
var G__46408 = cljs.core.count.call(null,c__4319__auto__);
var G__46409 = (0);
seq__46343 = G__46406;
chunk__46344 = G__46407;
count__46345 = G__46408;
i__46346 = G__46409;
continue;
} else {
var role = cljs.core.first.call(null,seq__46343__$1);
var temp__5457__auto___46410__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___46410__$2)){
var spec_46411 = temp__5457__auto___46410__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46411));
} else {
}


var G__46412 = cljs.core.next.call(null,seq__46343__$1);
var G__46413 = null;
var G__46414 = (0);
var G__46415 = (0);
seq__46343 = G__46412;
chunk__46344 = G__46413;
count__46345 = G__46414;
i__46346 = G__46415;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
