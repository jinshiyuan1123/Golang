document.write('<link rel="stylesheet" href="http://127.0.0.26/ad.css" type="text/css" />');
document.write('<link rel="stylesheet" href="http://127.0.0.26/ad.css" type="text/css" />');
function getElementsByClassName(classname,node){ 
    node = node || window.document;
    if(node.getElementsByClassName){ 
        return node.getElementsByClassName(classname); 
    }else{ 
    var results = new Array(); 
    var elems = node.getElementsByTag("*"); 
    for (var i=0;i<elems.length;i++){ 
        if(elems[i].className.indexOf(classname) != -1){ 
            results[elems.length] = elems[i]; 
        } 
    } 
    return results; 
    } 
};

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function toggleClass(obj,cls){
	if(hasClass(obj,cls)){
		removeClass(obj, cls);
	}else{
		addClass(obj, cls);
	}
}

function toggleClassTest(){
	var obj = document. getElementById('test');
	toggleClass(obj,"testClass");
}

var admin = getElementsByClassName('admin');
admin[0].innerHTML = ('<div>DADADAD</div>');




