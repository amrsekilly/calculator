var result=0,prev=0,operation=null,current=0;$("document").ready(function(){$("#clear-btn").click(function(){result=0,prev=0,current=0,$("#result").html(result)}),$("#add").click(function(){operation="+",result=current+prev,$("#result").html(result),prev=result,current=0}),$("#equals").click(function(){switch(operation){case"+":result=prev+current}$("#result").html(result)}),$("#one").click(function(){current=1,$("#result").html(current)}),$("#two").click(function(){current=2,$("#result").html(current)}),$("#three").click(function(){current=3,$("#result").html(current)}),$("#four").click(function(){current=4,$("#result").html(current)}),$("#five").click(function(){current=5,$("#result").html(current)}),$("#six").click(function(){current=6,$("#result").html(current)}),$("#seven").click(function(){current=7,$("#result").html(current)}),$("#eight").click(function(){current=8,$("#result").html(current)}),$("#nine").click(function(){current=9,$("#result").html(current)}),$("#zero").click(function(){current=0,$("#result").html(current)})});