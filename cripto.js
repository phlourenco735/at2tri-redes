function crypt(msg, hash) {
    const d = Date.now();
    
  let phrase = msg.split("");

    
    for (let i = 0; i < phrase.length; i++) {
        phrase[i] = (phrase[i].charCodeAt(0) * d);

        phrase[i] += hash;
    }

    
    phrase.push(d);

    
    let output = "";
    
   
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i];
        // output = output + phrase[i]
    }

    return output;
}

function decrypt(cypher, hash) {
    let h = String(hash)
    
    const msg = cypher.split(h);

    
    const d = msg.pop();

    
    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / d);
    }

    
    let output = "";

    
    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    
    return output;
}

const phrase = "Hambúrguer de Frango com Catupiry";

let pass = crypt(phrase, "012345678901234567890123456789");

console.log(pass);



let solve = decrypt(pass, "012345678901234567890123456789")

console.log(solve);
