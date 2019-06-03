import React from 'react'
import dateFns from 'date-fns'
import { Note } from '../Note'
import { FULL_DATE_FORMAT, DAY_FORMAT, DAY_OF_WEEK_FORMAT } from '../../../constants'
import './styles.css'

class Calendar extends React.Component {
  state = {
    currentDate: new Date()
  };

  renderHeader() {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>prev_month</div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentDate, FULL_DATE_FORMAT)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">next_month</div>
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
          {dateFns.format(dateFns.addDays(startDate, i), DAY_OF_WEEK_FORMAT)}
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

    for (let i = day; i <= endDate;) {
      for (let j = 0; j < 7; j++) {
        formattedDate = dateFns.format(i, DAY_FORMAT);
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(i, monthStart)
                ? "disabled"
                : dateFns.isSameDay(i, selectedDate) ? "selected" : ""
              }`}
            key={i}
          >
            <span className="number">{formattedDate}</span>
            <Note day={i} notes={this.props.notes}/>
          </div>
        );
        i = dateFns.addDays(i, 1);
      }
      rows.push(
        <div className="row" key={i}>
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
