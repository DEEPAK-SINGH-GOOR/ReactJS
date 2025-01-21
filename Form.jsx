import { useState } from "react";
import axios from "axios";
import "./Form.css"
const Form = () => {
    const [formData, setFormData] = useState({
        questionNo: "",
        question: "",
        answer: "",
    });
    const [questions, setquestions] = useState([]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const question = async (data) => {

        await axios.post("http://localhost:8090/api/question", data);

        const response = await axios.get("http://localhost:8090/api/question");
        setquestions(response.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        question(formData)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="questionNo" placeholder="Question No" value={formData.questionNo} onChange={handleInput}/>

                <input type="text" name="question" placeholder="Question" value={formData.question} onChange={handleInput}/>

                <input type="text" name="answer" placeholder="Answer" value={formData.answer} onChange={handleInput}/>
                <button type="submit">Add Question</button>
            </form>

            <div>
                <h2>Questions</h2>
                {questions.length ?(
                    <ul>
                        {questions.map((q, index) => (
                            <li key={index}>{q.questionNo}: {q.question} - {q.answer}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No questions yet.</p>
                )}
            </div>

        </div>
    );
};

export default Form;
