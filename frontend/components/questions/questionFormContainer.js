import questionForm from './questionForm';
import { createQuestion } from '../../actions/question_action';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
        createQuestion: question => dispatch(createQuestion(question)),
    });

const mapStateToProps = state => ({
        author_id: state.session.currentUserId,
        username: state.entities.users[state.session.currentUserId].username,
    });

export default connect(mapStateToProps, mapDispatchToProps)(questionForm);