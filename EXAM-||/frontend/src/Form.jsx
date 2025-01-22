import { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

const McqForm = () => {
    const [mcqs, setMcqs] = useState([]);
    const [formData, setFormData] = useState({
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: "",
    });

    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const fetchMcqs = async () => {
        try {
            const response = await axios.get("http://localhost:8090/api/mcq");
            setMcqs(response.data);
        } catch (error) {
            console.error("Error fetching MCQs:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8090/api/mcq", formData);
            alert(response.data);
            fetchMcqs();
            setFormData({
                question: "",
                optionA: "",
                optionB: "",
                optionC: "",
                optionD: "",
                correctAnswer: "",
            });
        } catch (error) {
            console.error("Error adding MCQ:", error);
        }
    };

    const handleAnswerSelect = (questionIndex, option) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: option,
        });
    };

    useEffect(() => {
        fetchMcqs();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="question" placeholder="Question" value={formData.question} onChange={handleInput} />
                <input type="text" name="optionA" placeholder="Option A" value={formData.optionA} onChange={handleInput} />
                <input type="text" name="optionB" placeholder="Option B" value={formData.optionB} onChange={handleInput} />
                <input type="text" name="optionC" placeholder="Option C" value={formData.optionC} onChange={handleInput} />
                <input type="text" name="optionD" placeholder="Option D" value={formData.optionD} onChange={handleInput} />
                <input type="text" name="correctAnswer" placeholder="Correct Answer (A, B, C, or D)" value={formData.correctAnswer} onChange={handleInput} />
                <button type="submit">Add MCQ</button>
            </form>

            <div>
                <h2>MCQs</h2>
                {mcqs.length ? (
                   <ul>
                   {mcqs.map((mcq, index) => (
                       <li key={index}>
                           {mcq.question} <br />
                           <div className="options">
                               <button
                                   className={`option ${selectedAnswers[index] === "a"
                                           ? mcq.correctAnswer === "a"
                                               ? "correct"
                                               : "wrong"
                                           : ""
                                       }`}
                                   onClick={() => handleAnswerSelect(index, "a")}
                               >
                                   A: {mcq.optionA}
                               </button>
                               <button
                                   className={`option ${selectedAnswers[index] === "b"
                                           ? mcq.correctAnswer === "b"
                                               ? "correct"
                                               : "wrong"
                                           : ""
                                       }`}
                                   onClick={() => handleAnswerSelect(index, "b")}
                               >
                                   B: {mcq.optionB}
                               </button>
                               <button
                                   className={`option ${selectedAnswers[index] === "c"
                                           ? mcq.correctAnswer === "c"
                                               ? "correct"
                                               : "wrong"
                                           : ""
                                       }`}
                                   onClick={() => handleAnswerSelect(index, "c")}
                               >
                                   C: {mcq.optionC}
                               </button>
                               <button
                                   className={`option ${selectedAnswers[index] === "d"
                                           ? mcq.correctAnswer === "d"
                                               ? "correct"
                                               : "wrong"
                                           : ""
                                       }`}
                                   onClick={() => handleAnswerSelect(index, "d")}
                               >
                                   D: {mcq.optionD}
                               </button>
                           </div>
                       </li>
                   ))}
               </ul>
               
                ) : (
                    <p>No MCQs available.</p>
                )}
            </div>
        </div>
    );
};

export default McqForm;
