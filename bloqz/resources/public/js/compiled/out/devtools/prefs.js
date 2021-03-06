// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs.simple_merge = (function devtools$prefs$simple_merge(var_args){
var args__27630__auto__ = [];
var len__27623__auto___38411 = arguments.length;
var i__27624__auto___38412 = (0);
while(true){
if((i__27624__auto___38412 < len__27623__auto___38411)){
args__27630__auto__.push((arguments[i__27624__auto___38412]));

var G__38413 = (i__27624__auto___38412 + (1));
i__27624__auto___38412 = G__38413;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((1) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((1)),(0),null)):null);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27631__auto__);
});

devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic = (function (base_map,maps){
var rmaps = cljs.core.reverse.call(null,maps);
var sentinel = {};
var sentinel_QMARK_ = ((function (rmaps,sentinel){
return (function (p1__38405_SHARP_){
return (p1__38405_SHARP_ === sentinel);
});})(rmaps,sentinel))
;
var merged_keys = cljs.core.dedupe.call(null,cljs.core.sort.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.keys,rmaps))));
var result = base_map;
var todo_keys = merged_keys;
while(true){
if(cljs.core.empty_QMARK_.call(null,todo_keys)){
return result;
} else {
var key = cljs.core.first.call(null,todo_keys);
var val = cljs.core.first.call(null,cljs.core.remove.call(null,sentinel_QMARK_,cljs.core.map.call(null,((function (result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys){
return (function (p1__38406_SHARP_){
return cljs.core.get.call(null,p1__38406_SHARP_,key,sentinel);
});})(result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys))
,rmaps)));
var G__38414 = cljs.core.assoc.call(null,result,key,val);
var G__38415 = cljs.core.rest.call(null,todo_keys);
result = G__38414;
todo_keys = G__38415;
continue;
}
break;
}
});

devtools.prefs.simple_merge.cljs$lang$maxFixedArity = (1);

devtools.prefs.simple_merge.cljs$lang$applyTo = (function (seq38407){
var G__38408 = cljs.core.first.call(null,seq38407);
var seq38407__$1 = cljs.core.next.call(null,seq38407);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic(G__38408,seq38407__$1);
});

devtools.prefs.default_config = devtools.defaults.prefs;
devtools.prefs.external_config = cljs.core.PersistentArrayMap.EMPTY;
devtools.prefs.env_config = cljs.core.PersistentArrayMap.EMPTY;
devtools.prefs.initial_config = devtools.prefs.simple_merge.call(null,devtools.prefs.default_config,devtools.prefs.external_config,devtools.prefs.env_config);
devtools.prefs._STAR_prefs_STAR_ = devtools.prefs.initial_config;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs._STAR_prefs_STAR_);
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_prefs_STAR_ = new_prefs;
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__27630__auto__ = [];
var len__27623__auto___38419 = arguments.length;
var i__27624__auto___38420 = (0);
while(true){
if((i__27624__auto___38420 < len__27623__auto___38419)){
args__27630__auto__.push((arguments[i__27624__auto___38420]));

var G__38421 = (i__27624__auto___38420 + (1));
i__27624__auto___38420 = G__38421;
continue;
} else {
}
break;
}

var argseq__27631__auto__ = ((((2) < args__27630__auto__.length))?(new cljs.core.IndexedSeq(args__27630__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27631__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq38416){
var G__38417 = cljs.core.first.call(null,seq38416);
var seq38416__$1 = cljs.core.next.call(null,seq38416);
var G__38418 = cljs.core.first.call(null,seq38416__$1);
var seq38416__$2 = cljs.core.next.call(null,seq38416__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38417,G__38418,seq38416__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1496160791819