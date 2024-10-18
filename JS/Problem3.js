const expect = (val) => {
  return {
    toBe: (expected) => {
      if (val === expected) {
        return true;
      } else {
        return "Not Equal";
      }
    },
    notToBe : (expected) => {
         if(expected !== val){  
            return true;
    }else {
        return "Equal";
    }
  }
};
}

console.log(expect(5).toBe(5)); 
console.log(expect(5).toBe(10)); 
console.log(expect(5).notToBe(10)); 
console.log(expect(5).notToBe(5)); 