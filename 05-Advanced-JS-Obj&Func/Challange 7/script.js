(function(){
    function Question(question,answers,correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
    
        for(var i = 0 ;i< this.answers.length;i++){
            console.log(i + ': '+ this.answers[i] );
        }
    }
    
    Question.prototype.checkAns = function(ans,callback){
        var sc;
        if(ans === this.correct){
            console.log('Correct Answer !!');
            sc = callback(true);
        }else{
            console.log('Try Again!');
            sc = callback(false);
        }
        this.displayScore(sc);
     }

     Question.prototype.displayScore = function(score){
         console.log('Score is:'+score);
         console.log('----------------');
     }
    
    var q1 = new Question('Which drink has more caffaine?', ['juice','coffee'],1 );
    var q2 = new Question('Which one is a fiction?', ['Gitanjali','Frankenstaine'],1 );
    var q3 = new Question('Which color has shorter wave-length', ['red','blue','green'],1);
    
    var questions = [q1,q2,q3];

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++
            }
            return  sc;
        }
    }

    var keepScore = score();
    
    function nextQuestion(){
    
        var n = Math.floor(Math.random() * questions.length);
        
        //console.log(n);
        
        questions[n].displayQuestion();
        
        var q = questions[n].question +'\n'+ questions[n].answers.join('\n');
        
        var answer = prompt(q);

        if(answer !== 'exit'){
            questions[n].checkAns(parseInt(answer),keepScore);
            nextQuestion();
        }
        
     }
     
     nextQuestion();
    
})();