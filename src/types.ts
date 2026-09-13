export interface User {
  id: string;
  name: string;
  role: "admin" | "maker" | "checker" | "issuer" | "student";
  password?: string;
  dob?: string;
  email?: string;
  language?: string;
  school?: string;
  state?: string;
  roll?: string;
  section?: string;
  class_name?: string;
  isSuspended?: boolean;
  otpEnabled?: boolean;
  lastLogin?: string;
  lastActive?: string;
}

export interface Question {
  id: string;
  type: "mcq" | "descriptive";
  questionText: string;
  options?: string[];
  marks: number;
}

export interface ExamPaper {
  id: string;
  language: string;
  class_name: string;
  subject: string;
  chapter: string;
  total_marks: number;
  exam_number: string;
  mode: "fixed" | "random";
  raw_input?: string;
  questions: Question[];
  created_by: string;
  created_at: string;
  question_paper_file?: string;
}

export interface AnswerSubmission {
  id: string;
  student_id: string;
  student_name: string;
  student_class: string;
  student_roll: string;
  student_email: string;
  exam_id: string;
  exam_subject: string;
  exam_number: string;
  exam_date: string;
  answers: {
    question_id: string;
    questionText: string;
    type: "mcq" | "descriptive";
    student_response: string;
    max_marks: number;
  }[];
  status: "under_evaluation" | "student_review" | "recheck" | "verified_waiting_results" | "result_out";
  student_signature?: string;
  checker_signature?: string;
  evaluated_by?: string;
  appeal_remark?: string;
  evaluation?: {
    question_id: string;
    marks_obtained: number;
    remarks: string;
  }[];
  evaluated_at?: string;
  uploaded_sheets?: string[];
}

export interface ResultProfile {
  id: string;
  student_id: string;
  student_name: string;
  student_class: string;
  submission_id: string;
  subject_name: string;
  exam_number: string;
  total_marks: number;
  earned_marks: number;
  percentage: number;
  grade: string;
  remarks: string;
  digital_signature: string;
  student_signature?: string;
  checker_signature?: string;
  issued_at: string;
  subject_breakdown: {
    question_text: string;
    max_marks: number;
    earned_marks: number;
    remarks: string;
  }[];
}

export const CLASSES_LIST = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10 (Madhyamik Preparation)",
  "Class 11",
  "Class 12 (Higher Secondary Preparation)"
];

export const LANGUAGES_LIST = ["Bengali Medium", "English Medium", "Hindi Medium"];

export const SUBJECTS_LIST = [
  "First Language (Bengali)",
  "Second Language (English)",
  "Mathematics",
  "Physical Science / Physics",
  "Life Science / Chemistry",
  "History",
  "Geography",
  "Computer Application"
];
