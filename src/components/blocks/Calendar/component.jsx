import React from 'react'
import dateFns from 'date-fns'
import { Note } from '@/components/blocks/Note'
import { FULL_DATE_FORMAT, DAY_FORMAT, DAY_OF_WEEK_FORMAT } from '@/constants'
import './styles.css'

/**
 * Calendar component.
 */
class Calendar extends React.Component {
    state = {
    currentDate: new Date()
  };

  /**
   * Render method for calendar header.
   */
  renderHeader() {
    return (
      <div className="header row text-center mb-4">
        <div className="col">
          <div className="icon" onClick={this.prevMonth}>prev month</div>
        </div>
        <div className="col">
          <span>{dateFns.format(this.state.currentDate, FULL_DATE_FORMAT)}</span>
        </div>
        <div className="col" onClick={this.nextMonth}>
          <div className="icon">next month</div>
        </div>
      </div>
    );
  }

  /**
   * Render method for week days.
   */
  renderDays() {
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col-1 week-day mx-auto text-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), DAY_OF_WEEK_FORMAT)}
        </div>
      );
    }

    return <div className="days row justify-content-center">{days}</div>;
  }

  /**
   * Render method for calendar cells.
   */
  renderCells() {
    const { notes } = this.props;
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
            className={`col cell mx-auto ${
              !dateFns.isSameMonth(i, monthStart)
                ? "disabled"
                : dateFns.isSameDay(i, selectedDate) ? "selected" : ""
              }`}
            key={i}
          >
            <span className="number">{formattedDate}</span>
            <Note day={i} notes={notes}/>
          </div>
        );
        i = dateFns.addDays(i, 1);
      }
      rows.push(
        <div className="row " key={i}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  }

  /**
   * Runs when user clicks next month.
   */
  nextMonth = () => {
    this.setState((prevState) => ({
      currentDate: dateFns.addMonths(prevState.currentDate, 1)
    }))
  };

  /**
   * Runs when user clicks prev month.
   */
  prevMonth = () => {
    this.setState((prevState) => ({
      currentDate: dateFns.subMonths(prevState.currentDate, 1)
    }))
  };

  /**
   * Component main render method.
   */
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
