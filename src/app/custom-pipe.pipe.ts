import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calmdown'
})
export class CustomPipePipe implements PipeTransform {

  transform(input: string, replacement: string): string {

    var badWords: string[] = ["bad", "rotten", "terrible"]

    for (var i = 0; i < badWords.length; i++) {
      input = input.replace(badWords[i], replacement)
    }

    return input;
  }

}
