"use strict"
const assoc_id="hamukazu-22"

function get_url(prod_id, assoc_id) {
  return "https://www.amazon.co.jp/exec/obidos/isbn/"+prod_id+"/"+assoc_id;
}

function get_prod_id(url) {
  const tags=["gp","dp","isbn","asin"];
  const s=url.split("/");
  for (var i=0; i<s.length-1; ++i) {
    if (tags.includes(s[i])) {
      if (s[i+1]=="product" && i+2<s.length) {
        return s[i+2];
      } else {
        return s[i+1];
      }
    }
  }
}

function convert_link(url, assoc_id) {
  const prod_id=get_prod_id(url);
  return get_url(prod_id, assoc_id);
}

new Vue({
    el: "#top",
    data: {
        prod: "",
        url: ""
    },
    methods: {
        textchanged() {
            if ( this.prod.indexOf("/")<0 ) {
                this.url=get_url(this.prod, assoc_id);
            } else {
                this.url=convert_link(this.prod, assoc_id);
            }
        },
        copy() {
            var copyText = document.getElementById("urltext");
            copyText.select();
            document.execCommand("copy");
        }
    }
});

                              
                              
