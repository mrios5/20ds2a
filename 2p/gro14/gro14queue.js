
function hotPotato (nameList, num){
    var queue = new Queue() // {1}
    for (let i=0; i<nameList.length; i++){
    queue.enqueue(nameList[i]); // {2}
    }
    let eliminated = '';
    while (queue.size() > 1){
    for (let i=0; i<num; i++){
    queue.enqueue(queue.dequeue()); // {3}
    }
    eliminated = queue.dequeue();// {4}
    console.log(eliminated + ' was eliminated from the Hot Potato game.');
    }
    return queue.dequeue();// {5}
   }
  
