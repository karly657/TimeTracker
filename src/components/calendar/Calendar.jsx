import React from 'react'
import dateFns from 'date-fns'
import NoteComponent from './NoteComponent'
import * as constants from '../../constants'

class Calendar extends React.Component {
  state = {
    currentDate: new Date()
  };

  renderHeader() {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
            </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentDate, constants.HEADER_DATE_FORMAT)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), constants.DAY_DATE_FORMAT)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentDate, selectedDate } = this.state; 
    const monthStart = dateFns.startOfMonth(currentDate);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, constants.CELLS_DATE_FORMAT);
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
              }`}
            key={day}
          >
            <span className="number">{formattedDate}</span>
            <NoteComponent day={day} notes={this.props.notes}/>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  }

  nextMonth = () => {
    this.setState((prevState) => ({
      currentDate: dateFns.addMonths(prevState.currentDate, 1)
    }))
  };

  prevMonth = () => {
    this.setState((prevState) => ({
      currentDate: dateFns.subMonths(prevState.currentDate, 1)
    }))
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;
