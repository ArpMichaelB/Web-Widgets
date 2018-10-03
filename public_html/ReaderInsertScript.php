<?php
	$storyDefault = "You rose, groaning at your alarm’s harsh beeping, and stretched a bit, letting out a yawn. Realizing the world was still a bit hazy as you padded from the bed to take out your frustration on the alarm clock, you blinked a few times to bring things into focus, and as you tried to grasp a glass of water, it (along with quite a few other assorted things) came crashing down loudly from the desk on which it was perched. \"Y/N please, I don’t have class for another few hours!\" your roommate grumbled, rather unhappily. After rushing through getting ready for the day, you found yourself sitting in the fourth floor lab, early enough to hear someone chattering a few rows back from you, and you didn’t like what you heard: \"Ugh, I can’t believe that Y/N actually showed up today, and early to boot. Usually T/P misses at least half the class when they make it at all!\"";
	$storyEntered = $_POST["Story"];
	$story = "";
	if($storyEntered != $storyDefault)
	//i.e. if it's not the default text that's in the box
	{
		$story = $storyEntered;
	}
	else
	{
		$story = $storyDefault;
	}
	//if we don't have a story entered by the user, then use the default story I wrote
	while(preg_match("/Y\/N/",$story) || preg_match("/T\/P/",$story) || preg_match("/Y\/A/",$story))
	{
		preg_replace("/Y\/N/",$_POST["name"],$story);
		preg_replace("/T\/P/",$_POST["pronoun"],$story);
		preg_replace("/Y\/A/",$_POST["age"],$story);
		//while there's still y/n and t/p in the story string, replace them out
	}
	print("<p class = \" story \"> $story <\p>");
?>