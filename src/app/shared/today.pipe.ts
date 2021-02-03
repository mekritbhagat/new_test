import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateTodayCount'
})

export class TodayCount implements PipeTransform {
    
    transform(todoItems: any, args?: any): any {
        return todoItems.filter((todo) => this.isToday(new Date())).length;
    }

    private isToday(someDate) {
        const today = new Date();
        return (
            someDate.getDate() == today.getDate() &&
            someDate.getMonth() == today.getMonth() &&
            someDate.getFullYear() == today.getFullYear()
        );
    }
}