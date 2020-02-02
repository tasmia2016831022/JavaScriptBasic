var TeamJhon = (89 + 300 + 103)/3;
var TeamMike = (116 + 129 + 123)/3;

var winner = TeamJhon > TeamMike ? 'Team Jhon'
: 'Team Mike';
console.log('Winner is '+winner);

var TeamMary = (97 + 134 + 105)/3;

if(TeamMary > TeamJhon && TeamMary > TeamMike)
    {
        console.log('Mary');
    }else if(TeamJhon > TeamMary && TeamJhon > TeamMike )
    {
        console.log('Jhon');
    }else{
        console.log('Mike or drW')
    }