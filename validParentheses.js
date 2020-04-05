var isValid = function(s) {
    
    let stack = []

    let brackets = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }

    for(let ch of s){
        if(ch in brackets){
            stack.push(brackets[ch])
        }else{
            if(stack.length === 0 || stack.pop() !== ch){
                return false
            }else{
                continue
            }
        }
    }

    return stack.length === 0


};

console.log(isValid("([)]"))

