newTrial("instructions1_val",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("In the second part of the experiment, your job is to categorize each word as <b>POSITIVE</b> or <b>NEGATIVE</b>. You can answer by pressing the corresponding <b>F</b> or the <b>J</b> key on your keyboard.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("For example, most people would agree that the word <b>KITTEN</b> generally has POSITIVE associations. That means thinking of kittens make you feel happy, pleased, satisfied, contented, hopeful. You can indicate a word is positive in this sense by pressing the key corresponding to <b>POSITIVE</b>.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("In contrast, most people would agree that the word <b>DEATH</b> generally has NEGATIVE associations. That means thinking of death make you feel completely unhappy, annoyed, unsatisfied, melancholic, despaired, or bored. You can indicate a word is negative in this sense by pressing the key corresponding to <b>NEGATIVE</b>.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );
    
newTrial("instructions2_val",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Please work at a rapid pace and don’t spend too much time thinking about each word. Rather, make your response based on your first and immediate reaction as you read each word.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Some words may not be straightforwardly one or the other. If you feel completely neutral, neither happy nor sad, try your best to choose one option all the same.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );
    
newTrial("instructions3_hands",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Please position your fingers as shown in the picture below. The trials will advance <b>automatically</b>, so you won't need to move your hands during the experiment.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the <strong>SPACE BAR</strong> when you are ready to start the experiment.")
        .center()
        .print()
    ,
    newImage("fingers.png")
        .center()
        .size( 500,229 )
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newKey(" ")
        .wait()
);
    
    
newTrial("practice_intro_val",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Lets practice before we begin.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the space bar to continue.")
        .center()
        .print()
    ,
    newKey(" ")
        .wait()
    );

newTrial("endinstructions_val",

    newText("Great! Now you're ready for the second part of the experiment.")
        .settings.css("font-size","25")
        .center()
        .print()
    ,  
    newText("<br>")
        .center()
        .print()
    ,
    newText("Remember to respond as quickly as possible, but without sacrificing accuracy.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Make sure you're in a quiet room with no distractions.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Once you start the experiment, do not stop until the end.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the space bar when you're ready to start.")
        .center()
        .print()
    ,
    newKey(" ")
        .wait()
    );


    newTrial("mid_task_instructions",
    newText("<b>PAUSE</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("YOU HAVE REACHED THE END OF THE FIRST HALF.")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("Great Job so far!")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("If you need to take a break, do so now before continuing.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("When you are ready to begin, press the button below.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );




newTrial("instructions1_so",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("In the first part of the experiment, your job is to categorize each word as <b>SUBJECTIVE</b> or <b>OBJECTIVE</b>. You can answer by pressing the corresponding <b>F</b> or the <b>J</b> key on your keyboard.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("For example, most people would agree that the word <b>ROUND</b> generally has OBJECTIVE associations. Objective words refer to things not influenced by personal feelings or opinions in considering and representing facts. You should indicate a word is objective in this sense by pressing the key corresponding to <b>OBJECTIVE</b>.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print()
    ,
    newText("In contrast, most people would agree that the word <b>FUN</b> generally has SUBJECTIVE associations. Subjective words refer to things based on or influenced by personal feelings, tastes, or opinions. You should indicate a word is subjective in this sense by pressing the key corresponding to <b>SUBJECTIVE</b>.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newButton("continue")
        .center()
        .print()
        .wait()
    );
    
newTrial("instructions2_so",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Please work at a rapid pace and don’t spend too much time thinking about each word. Rather, make your response based on your first and immediate reaction as you read each word.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Some words may not be straightforwardly one or the other. If you feel a word is neither subjective nor objective, try your best to choose one option all the same.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    
    newButton("continue")
        .center()
        .print()
        .wait()
    );
    
newTrial("instructions3_so",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Please position your fingers as shown in the picture below. The trials will advance <b>automatically</b>, so you won't need to move your hands during the experiment.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the <strong>SPACE BAR</strong> when you are ready to start the experiment.")
        .center()
        .print()
    ,
    newImage("fingers.png")
        .center()
        .size( 500,229 )
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newKey(" ")
        .wait()
);

newTrial("practice_intro_so",
    newText("<b>INSTRUCTIONS</b>")
        .settings.css("font-size","20")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Lets practice before we begin.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the space bar to continue.")
        .center()
        .print()
    ,
    newKey(" ")
        .wait()
    );
    
newTrial("endinstructions_so",

    newText("Great! Now you're ready for the first part of the experiment.")
        .settings.css("font-size","25")
        .center()
        .print()
    ,  
    newText("<br>")
        .center()
        .print()
    ,
    newText("Remember to respond as quickly as possible, but without sacrificing accuracy.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Make sure you're in a quiet room with no distractions.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Once you start the experiment, do not stop until the pause.")
        .center()
        .print()
    ,
    newText("<br>")
        .center()
        .print() 
    ,
    newText("Press the space bar when you're ready to start.")
        .center()
        .print()
    ,
    newKey(" ")
        .wait()
    );