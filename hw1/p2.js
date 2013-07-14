#!/usr/bin/env node
var numsToTest=[];
var primes=[];
var counter=0, maxCounter=100;
var nn=10000000;
for (i=0;i<nn;i++) {numsToTest[i]=1;}
for (p=2;p<Math.sqrt(nn);p++){
    if (numsToTest[p]) {
	counter++;
	if (counter > maxCounter) {continue;}
	primes.push(p);
	for (j=p;j<nn;j+=p) {
	    numsToTest[j]=0;
	}
    }
}

var fs = require('fs');
var outfile = "100primes.txt"
fs.writeFileSync(outfile,primes);

