import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Formik, FormikProps } from 'formik';
import { CreateGame, ResetGame } from '../../../business/Game/actions';

import './styles.scss';

interface FormValues {
  rows: number;
  columns: number;
  level: string;
}

interface FormError {
  rows?: string;
  columns?: string;
  level?: string;
}

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ResetGame());
  });

  return (
    <div className="home">
      <Formik
        initialValues={{
          rows: 10,
          columns: 12,
          level: 'medium',
        }}
        validate={(values: FormValues) => {
          const errors: FormError = {};
          if (!values.rows) {
            errors.rows = 'Required';
          } else if (values.rows < 4) {
            errors.rows = 'At least 4 rows are required';
          }
          if (!values.columns) {
            errors.columns = 'Required';
          } else if (values.columns < 4) {
            errors.rows = 'At least 4 rows are required';
          }
          if (!values.level) {
            errors.level = 'Please select a level';
          }
          return errors;
        }}
        onSubmit={(values: FormValues) => {
          const levelWeight =
            values.level === 'easy'
              ? 0.1
              : values.level === 'medium'
              ? 0.2
              : 0.4;
          const bombs = Math.floor(values.columns * values.rows * levelWeight);
          dispatch(
            CreateGame({ rows: values.rows, cols: values.columns, bombs })
          );
          history.push('/board');
        }}
        validateOnMount
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          isValid,
        }: FormikProps<FormValues>) => (
          <form className="home__form" onSubmit={handleSubmit}>
            <h1 className="home__header">Minesweeper</h1>
            <div className="home__group">
              <label className="home__label" htmlFor="gameRows">
                Rows:
                <br />
                <input
                  name="rows"
                  className="home__input-text"
                  type="number"
                  id="gameRows"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.rows}
                  maxLength={2}
                />
              </label>
              {errors.rows && (
                <>
                  <br />
                  <span className="home__error">{errors.rows}</span>
                </>
              )}
            </div>
            <div className="home__group">
              <label className="home__label" htmlFor="gameColumns">
                Columns:
                <br />
                <input
                  name="columns"
                  className="home__input-text"
                  type="number"
                  id="gameColumns"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.columns}
                  maxLength={2}
                />
                {errors.columns && (
                  <>
                    <br />
                    <span className="home__error">{errors.columns}</span>
                  </>
                )}
              </label>
            </div>
            <div className="home__group">
              <label className="home__label" htmlFor="gameLevel">
                Level:
                <br />
                <select
                  name="level"
                  className="home__input-text"
                  id="gameLevel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.level}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
              {errors.level && (
                <>
                  <br />
                  <span className="home__error">{errors.level}</span>
                </>
              )}
            </div>
            <div className="reminder-modal__button-group">
              <button type="submit" disabled={!isValid}>
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(Home);
