const letterA = [  
  ["     *     "],   
  ["    * *    "],  
  ["   *****   "],  
  ["  *     *  "],    
  [" *       * "]
 ]    
const letterB = [  
  [" * * * **  "]    
  [" *       * "]     
  [" * * ****  "]     
  [" *       * "]      
  [" * * * **  "]
]    
const letterC = [  
  ["  ** * * * "]      
  [" *         "]   
  [" *         "]    
  [" *         "]      
  ["  ** * * * "]  
]    
const letterD = [   
  [" * * * *   "]              
  [" *       * "]            
  [" *       * "]              
  [" *       * "]                
  [" * * * *   "] 
]           
const letterE = [      
  [" * * * * * "]               
  [" *         "]            
  [" * * * * * "]      
  [" *         "]          
  [" * * * * * "]  
]        
const letterF = [    
  [" * * * * * "]        
  [" *         "]          
  [" * * * * * "]         
  [" *         "]           
  [" *         "] 
]       
const letterG = [      
  [" * * * * * "]          
  [" *         "]           
  [" *   * * * "]          
  [" *       * "]         
  [" * * * * * "]
]           
const letterH = [       
  [" *       * "]         
  [" *       * "]           
  [" * * * * * "]         
  [" *       * "]        
  [" *       * "]
]      
const letterI = [       
  [" * * * * * "]         
  ["     *     "]         
  ["     *     "]       
  ["     *     "]           
  [" * * * * * "]
]          
const letterJ = [      
  [" * * * * * "]          
  ["     *     "]           
  ["     *     "]        
  ["     *     "]            
  ["  * **     "]         
]          
const letterK = [        
  [" *       * "]          
  [" *     *   "]         
  [" * * **    "]       
  [" *     *   "]       
  [" *       * "]         
]          
const letterL = [      
  [" *         "]      
  [" *         "]          
  [" *         "]        
  [" *         "]          
  [" * * * * * "]          
]          
const letterM = [     
  [" *       * "]        
  [" * *   * * "]          
  [" *   *   * "]            
  [" *       * "]      
  [" *       * "]          
]          
const letterN = [     
  [" *       * "]          
  [" * *     * "]            
  [" *   *   * "]          
  [" *     * * "]              
  [" *       * "]            
]          
const letterO = [         
  ["   * * *   "]            
  [" *       * "]          
  [" *       * "]        
  [" *       * "]              
  ["   * * *   "]        
]          
const letterP = [        
  [" * * * *   "]        
  [" *       * "]        
  [" * * * *   "]          
  [" *         "]          
  [" *         "]    
]          
const letterQ = [         
  ["   * * *   "]          
  [" *       * "]        
  [" *   *   * "]        
  [" *     * * "]            
  ["   * **  * "]          
]          
const letterR = [        
  [" * * * *   "]      
  [" *       * "]        
  [" * * * *   "]          
  [" *     *   "]      
  [" *       * "]          
]          
const letterS = [   
  ["  * * * *  "]      
  [" *         "]        
  ["  * *** *  "]              
  ["         * "]              
  ["  * * * *  "]            
]          
const letterT = [     
  [" * * * * * "]              
  ["     *     "]              
  ["     *     "]              
  ["     *     "]          
  ["     *     "]        
]          
const letterU = [   
  [" *       * "]          
  [" *       * "]      
  [" *       * "]        
  [" *       * "]        
  ["   * * *   "]        
]          
const letterV = [      
  [" *       * "]        
  ["  *     *  "]          
  ["   *   *   "]        
  ["    * *    "]      
  ["     *     "]          
]          
const letterW = [    
  [" *       * "]    
  [" *       * "]            
  [" *   *   * "]      
  [" * *   * * "]        
  [" *       * "]      
]          
const letterX = [ 
  [" *       * "]      
  ["   *   *   "]      
  ["     *     "]    
  ["   *   *   "]    
  [" *       * "]      
]          
const letterY = [   
  [" *       * "]    
  ["   *   *   "]    
  ["     *     "]    
  ["     *     "]    
  ["     *     "]    
]          
const letterZ = [   
  [" * * * * * "]      
  ["       *   "]    
  ["     *     "]    
  ["   *       "]    
  [" * * * * * "]      
]

switch("A") {
  case 'A': return letterA;
  case 'A': return letterA;
  case 'A': return letterA;
  case 'A': return letterA;
  case 'A': return letterA;
  case 'A': return letterA;
  case 'A': return letterA;
  case 'A': return letterA;
  case 'A': return letterA;
  case 'A': return letterA;
  case 'A': return letterA

}


// function leftPadding(message, column = 127) {
//   const emptyColunms = column - message.length;
//   const leftPad = Math.floor(emptyColunms / 2) + message.length;

//   return message.padStart(leftPad)
// }

// function alignCenterHorizontally(message, column = 127) {
//   const leftPaddedMsg = leftPadding(message, column)
//   return leftPaddedMsg.padEnd(column);
// }

// function delayTime(seconds) {

//   for (let secCount = 0; secCount < seconds; secCount++) {
//     let timeCount = [];
//     for (let count = 0; count < 5000000; count++) {
//       timeCount.push(count);
//     }
//   }

// }


// const word = [
//   [letterA[0] + letterB[0] + letterC[0]],
//   [letterA[1] + letterB[1] + letterC[1]],
//   [letterA[2] + letterB[2] + letterC[2]],
//   [letterA[3] + letterB[3] + letterC[3]],
//   [letterA[4] + letterB[4] + letterC[4]],
// ]

// function showword() {
//   console.clear();
//   console.log("\n".repeat(8));
//   for (let index = 0; index < word.length; index++) {
//     console.log("" + word[index]);
//     delayTime(5);
//   }
//   console.log("\n".repeat(8));
// }

// function showWordFast(length) {
//   console.log("\n".repeat(8));
//   for (let index = 0; index < length; index++) {
//     console.log("" + word[index]);
//   }
//   delayTime(5);
//   console.log("\n".repeat(10));
// }


// function removeLastLine() {
//   console.log("\n".repeat(8));
//   for (let index = word.length - 1; index >= 0; index--) {
//     console.clear();
//     showWordFast(index);
//     console.log("\n".repeat(15));
//     delayTime(5);
//   }
//   console.log("\n".repeat(8));
// }

// showword();
// showWordFast();
// removeLastLine();
let char = "A"
let Alphabet = "letter" + `${letter}`
console.log(letter + `${char}`);  
    

    
  



   

