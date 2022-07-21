const text = (/ab/g); let match;

while(match = text.exec('abcdeabf')) { console.log(match); }