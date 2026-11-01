class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(array1) {

        let sortarray=[];
 sortarray=array1.sort((a,b)=> a-b);

 let temp=0;

 for(let i=0;i<sortarray.length-1;i++){
  if(sortarray[i]===sortarray[i+1]){
    temp=1;
    break;
  }
  else{
    continue
  }
 }
if(temp===1){
  return true;
 }
 else{
  return false;
 }
    }
}
