import java.io.*; 
import java.util.Arrays;
  
class sentenceSmash {
    public static String smash(String... words){
        String result = String.join(" ", words);
        return (result);
    }

    public static void main(String[] args){
        String[] smashArray = {"My", "name", "is", "Faris"};
        System.out.print(smash(smashArray));
    } 
    
} 