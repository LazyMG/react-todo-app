import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

// interface IForm {
//   email: string;
//   firstName: string;
//   lastName: string;
//   userName: string;
//   password: string;
//   passwordConfirmation: string;
//   extraError?: string;
// }

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   const onValid = (data: IForm) => {
//     if (data.password !== data.passwordConfirmation) {
//       return setError(
//         "passwordConfirmation",
//         {
//           message: "Password are not the same",
//         },
//         { shouldFocus: true }
//       );
//     }
//     setError("extraError", { message: "Server offline" });
//   };
//   console.log(errors);
//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
//               message: "Only naver.com emails allowed",
//             },
//           })}
//           placeholder="Write your Email"
//         />
//         <span>{errors?.email?.message}</span>
//         <input
//           {...register("firstName", {
//             required: "Write Here",
//             validate: {
//               noMaga: (value) =>
//                 value.includes("maga") ? "no maga allowed" : true,
//               noMArk: (value) =>
//                 value.includes("mark") ? "no mark allowed" : true,
//             },
//           })}
//           placeholder="Write your First Name"
//         />
//         <span>{errors?.firstName?.message}</span>
//         <input
//           {...register("lastName", { required: "Write Here" })}
//           placeholder="Write your Last Name"
//         />
//         <span>{errors?.lastName?.message}</span>
//         <input
//           {...register("userName", { required: "Write Here", minLength: 10 })}
//           placeholder="Write your userName"
//         />
//         <span>{errors?.userName?.message}</span>
//         <input
//           {...register("password", { required: "Write Here", minLength: 5 })}
//           placeholder="Write your Password"
//         />
//         <span>{errors?.password?.message}</span>
//         <input
//           {...register("passwordConfirmation", {
//             required: "Password is required",
//             minLength: {
//               value: 5,
//               message: "Your password is too short",
//             },
//           })}
//           placeholder="Write your Password Confirmation"
//         />
//         <span>{errors?.passwordConfirmation?.message}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
