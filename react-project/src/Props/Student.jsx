//* props = js object: read-only properties that are shared between components.

//* A parent component can send data to a child component.
// Here parent component: App.jsx and chid component: Student.jsx

//* Syntax
// ‹Component key=value /> 

//* defaultProps = default values passed as parameter in function for props in case they are not passed from the parent component
// {name = "Guest", age= 0, isStudent = false}
//! in defaultProps object instead of ":" , "=" is used.


function Student({name = "Guest", age= 0, isStudent = false}) {
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student;
