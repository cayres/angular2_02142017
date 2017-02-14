import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "myUpperCase" })
export class MyUpperCasePipe implements PipeTransform {

    public transform(value: any) {
        return String(value).toUpperCase();
    }

}

