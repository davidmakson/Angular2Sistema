import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {DayPilot} from "daypilot-pro-angular";
import {DataService, MoveEventParams} from "../backend/data.service";
import {CreateComponent} from "../dialogs/create.component";

@Component({
  selector: 'calendar-component',
  templateUrl: './calendar.component.html',
  styles: [`
  .column-left {
    width: 160px;
    float: left;
  }
  
  .column-main {
    margin-left: 160px;
  }
  `]
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild("calendar") calendar : DayPilot.Angular.Calendar;
  @ViewChild("create") create: CreateComponent;
 
  //  var eventData = {
  //  events : [
  //    {'id':1, 'start': new Date(year, month, day, 12), 'end': new Date(year, month, day, 13, 35),'title':'Lunch with Mike'},
  //    {'id':2, 'start': new Date(year, month, day, 14), 'end': new Date(year, month, day, 14, 45),'title':'Dev Meeting'},
  //    {'id':3, 'start': new Date(year, month, day + 1, 18), 'end': new Date(year, month, day + 1, 18, 45),'title':'Hair cut'},
  //    {'id':4, 'start': new Date(year, month, day - 1, 8), 'end': new Date(year, month, day - 1, 9, 30),'title':'Team breakfast'},
  //    {'id':5, 'start': new Date(year, month, day + 1, 14), 'end': new Date(year, month, day + 1, 15),'title':'Product showcase'}
  //  ]
  //};
  
  //JSON {"id":1, "start":"2009-05-10T13:15:00.000+10:00", "end":"2009-05-10T14:15:00.000+10:00", "text":"Lunch with Mike"}
  events: any[];
  
  navigatorConfig = {
    selectMode: "week"
  };

  calendarConfig = {
    startDate: DayPilot.Date.today(),
    viewType: "Week",
    eventDeleteHandling: "Update",
    onEventDeleted: args => {
      this.ds.deleteEvent(args.e.id()).subscribe(result => this.calendar.control.message("Deleted"));
    },
    onEventMoved: args => {
      let params : MoveEventParams = {
        id: args.e.id(),
        newStart: args.newStart,
        newEnd: args.newEnd
      };
      this.ds.moveEvent(params).subscribe(result => this.calendar.control.message("Moved"));
    },
    onEventResized: args => {
      let params : MoveEventParams = {
        id: args.e.id(),
        newStart: args.newStart,
        newEnd: args.newEnd
      };
      this.ds.moveEvent(params).subscribe(result => this.calendar.control.message("Resized"));
    },
    onTimeRangeSelected: args => {
      this.create.show(args);
    }
  };

  constructor(private ds: DataService) {  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //this.ds.getEvents(this.calendar.control.visibleStart(), this.calendar.control.visibleEnd()).subscribe(result => this.events = result);
  }

  viewChange() {
    this.ds.getEvents(this.calendar.control.visibleStart()).subscribe(result => this.events = result);

  }

  createClosed(args) {
    if (args.result) {
      this.events.push(args.result);
    }
    this.calendar.control.clearSelection();
  }

}
