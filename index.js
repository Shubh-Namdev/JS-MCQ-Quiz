var marks=0;

$(document).ready(function(){
    $("#btn_submit").click(function(){
    const q1_ans=($('input[name="flexradiodefault"]:checked').val());
    if(q1_ans==="true")
    {
        marks++;
    }
});

$("#btn_submit").click(function(){
    const q2_ans=($('input[name="flexradiodefault1"]:checked').val());
    if(q2_ans==="true")
    {
        marks++;
    }
});

$("#btn_submit").click(function(){
    const q3_ans=($('input[name="flexradiodefault2"]:checked').val());
    if(q3_ans==="true")
    {
        marks++;
    }
});

$("#btn_submit").click(function(){
    const q4_ans=($('input[name="flexradiodefault3"]:checked').val());
    if(q4_ans==="true")
    {
        marks++;
    }
});

$("#btn_submit").click(function(){
    const q5_ans=($('input[name="flexradiodefault4"]:checked').val());
    if(q5_ans==="true")
    {
        marks++;
    } 

    if(marks>3)
    {
        document.getElementById('result').innerHTML="Yes";
    }
    else if(marks>1)
    {
        document.getElementById('result').innerHTML="May be";
    }
    else{
        document.getElementById('result').innerHTML="No";
    }
});
});
