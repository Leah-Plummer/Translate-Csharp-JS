using System;
using System.Collections.Generic;    

namespace Insulter
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // creates an array of insults of type List<string>.
            List<string> insults = new List<string>() {
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
            }; 

            // method randomly writes an insult from the insults array to the console a specified number of times.
            static void Insults(List<string> insults)
            {
                Console.WriteLine("How many times would you like to be insulted?");

                List<string> usedInsults = new List<string>();
                 
                string response = Console.ReadLine();
                int numberOfInsults = int.Parse(response);

                    for (int i = 0; i < numberOfInsults; i++)
                    {
                        Random rnd = new Random();
                        int n  = rnd.Next(0, 7);
                        string s = n.ToString();
                        string usedInsultsString = string.Join("", usedInsults);

                        if (!usedInsultsString.Contains(s)) 
                        {
                            Console.WriteLine($"{insults[n]}");
                            usedInsults.Add(s);
                        }
                        else 
                        {
                            i--;
                        }
                        if (i == 6 && numberOfInsults > 7)
                        {
                            Console.WriteLine("I'm all out of insults.");
                            break; 
                        }
                    }
            }

            Insults(insults);

        }

    }
}