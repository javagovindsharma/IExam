import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';
import { useAppSelector } from '../../config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster" />
      </Col>
      <Col md="9">
        <h2>
          <Translate contentKey="home.title">Welcome, Online Exam!</Translate>
        </h2>
        {account?.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>

              <Link to="/login" className="alert-link">
                <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
              </Link>
              <Translate contentKey="global.messages.info.authenticated.suffix">
                , you can try the default accounts:
                <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
                <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
              </Translate>
            </Alert>

            <Alert color="warning">
              <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
              <Link to="/account/register" className="alert-link">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </Alert>
          </div>
        )}
        <p>
          <Translate contentKey="home.question">If you have any question on JHipster:</Translate>
        </p>

        <ul>
          <li>
            <p>
              Create unlimited tests/exams in different formats with our online exam software. The administrator of online exam software can
              create a test by selecting the questions from the question bank.
            </p>
          </li>
          <li>
            <p>
              Once the test is ready, it can be scheduled at a defined date and time to make it active. It is effortless to add/import
              different types of questions from pdf, word, and excel through the best online exam software.
            </p>
          </li>
          <li>
            <p>
              Our online exam website supports various exam formats like multiple choices, multiple choices with multiple answers, fill in
              the blanks, true & false, essay, matrix match, match the following, etc.
            </p>
          </li>
          <li>
            <p>
              One can also get study material in different formats like images, tutorial videos, etc. Questions can be added under different
              subjects, lessons, and sub lessons; also, random/shuffle questions are also available in test settings. ConductExam also
              supports questions in multiple languages, and one can take a test in their regional language also.
            </p>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Home;
