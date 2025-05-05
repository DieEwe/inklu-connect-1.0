// Place in src/components/QuestionnaireWizard.tsx

import React, { useState } from "react";

const QUESTION_TEXTS = [
  "Are you part of our internal team?",
  "Are you signing up on behalf of a company/organisation?",
  "Do you personally identify as a person with a disability?",
  "What brings you here today?",
];

const OPTIONS_Q4 = [
  { value: "talent", label: "Talent (I’m looking for inclusive job opportunities)" },
  { value: "mentor", label: "Mentor (I’d like to share expertise as a paid mentor)" },
  { value: "prospect", label: "Prospect (I’m browsing resources & information)" },
];

export function QuestionnaireWizard({ onComplete }: { onComplete?: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    internal: undefined as undefined | boolean,
    company: undefined as undefined | boolean,
    disability: undefined as undefined | "yes" | "no" | "preferNot",
    interests: [] as string[],
  });
  const [error, setError] = useState<string | null>(null);

  const canBeTalentOrMentor =
    answers.disability === "yes" || answers.disability === "preferNot";

  function handleQ1(answer: boolean) {
    setAnswers((a) => ({ ...a, internal: answer }));
    if (answer) {
      // If internal, immediately finish wizard
      if (onComplete) onComplete();
    } else {
      setStep(1);
    }
  }

  function handleQ2(answer: boolean) {
    setAnswers((a) => ({ ...a, company: answer }));
    setStep(2);
  }

  function handleQ3(answer: "yes" | "no" | "preferNot") {
    setAnswers((a) => ({ ...a, disability: answer }));
    setStep(3);
  }

  function handleQ4Change(option: string) {
    setAnswers((a) => {
      let next = a.interests.includes(option)
        ? a.interests.filter((v) => v !== option)
        : [...a.interests, option];
      return { ...a, interests: next };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (
      !canBeTalentOrMentor &&
      answers.interests.some((v) => v === "talent" || v === "mentor")
    ) {
      setError(
        "These options are reserved for users with disabilities. Please change your selection or update your answer to the previous question."
      );
      return;
    }
    const tags: string[] = [];
    if (answers.internal) tags.push("internal");
    if (answers.company) tags.push("company");
    tags.push(...answers.interests);
    console.log("Selected tags:", tags);
    if (onComplete) onComplete();
  }

  // Step progress bar
  const steps = [0, 1, 2, 3];

  return (
    <form
      className="max-w-lg w-full mx-auto p-0 bg-white dark:bg-dark-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-dark-700 flex flex-col"
      onSubmit={handleSubmit}
      aria-labelledby="questionnaire-title"
    >
      {/* Progress bar */}
      <div className="flex items-center justify-center gap-4 pt-8 pb-2">
        {steps.map((idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2
                ${step === idx
                  ? "border-accent bg-accent text-white"
                  : step > idx
                  ? "border-green-500 bg-green-500 text-white"
                  : "border-neutral-300 bg-white dark:bg-dark-800 text-neutral-400"}
                font-bold transition`}
            >
              {idx + 1}
            </div>
            <div className="h-2" />
          </div>
        ))}
      </div>
      <div className="px-10 py-8 flex flex-col gap-8">
        <h2 id="questionnaire-title" className="text-2xl font-bold text-center text-foreground mb-2">
          Welcome! Help us get to know you
        </h2>

        {/* Step 1 */}
        {step === 0 && (
          <div className="flex flex-col gap-8 items-center">
            <div className="text-lg font-medium text-center text-foreground">{QUESTION_TEXTS[0]}</div>
            <div className="flex gap-6">
              <button
                type="button"
                className="modern-btn-primary"
                onClick={() => handleQ1(true)}
                aria-label="Yes"
              >
                Yes
              </button>
              <button
                type="button"
                className="modern-btn-secondary"
                onClick={() => handleQ1(false)}
                aria-label="No"
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <div className="flex flex-col gap-8 items-center">
            <div className="text-lg font-medium text-center text-foreground">{QUESTION_TEXTS[1]}</div>
            <div className="flex gap-6">
              <button
                type="button"
                className="modern-btn-primary"
                onClick={() => handleQ2(true)}
                aria-label="Yes"
              >
                Yes
              </button>
              <button
                type="button"
                className="modern-btn-secondary"
                onClick={() => handleQ2(false)}
                aria-label="No"
              >
                No
              </button>
            </div>
            <button
              type="button"
              className="modern-btn-link mt-2"
              onClick={() => setStep(0)}
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <div className="flex flex-col gap-8 items-center">
            <div className="text-lg font-medium text-center text-foreground">{QUESTION_TEXTS[2]}</div>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="modern-btn-primary"
                onClick={() => handleQ3("yes")}
                aria-label="Yes"
              >
                Yes
              </button>
              <button
                type="button"
                className="modern-btn-secondary"
                onClick={() => handleQ3("no")}
                aria-label="No"
              >
                No
              </button>
              <button
                type="button"
                className="modern-btn-secondary"
                onClick={() => handleQ3("preferNot")}
                aria-label="Prefer not to say"
              >
                Prefer not to say
              </button>
              <button
                type="button"
                className="modern-btn-link"
                onClick={() => setStep(answers.internal ? 2 : 1)}
              >
                ← Back
              </button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 3 && (
          <div className="flex flex-col gap-8 items-center">
            <div className="text-lg font-medium text-center text-foreground">{QUESTION_TEXTS[3]}</div>
            <div className="flex flex-col gap-4 items-center">
              {OPTIONS_Q4.map((opt) => {
                const disabled =
                  (opt.value === "talent" || opt.value === "mentor") &&
                  !canBeTalentOrMentor;
                return (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg border transition
                      ${answers.interests.includes(opt.value)
                        ? "border-accent bg-accent/10 text-accent font-semibold"
                        : "border-neutral-300 dark:border-dark-700 bg-white dark:bg-dark-800 text-foreground"}
                      ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-accent"}
                    `}
                  >
                    <input
                      type="checkbox"
                      value={opt.value}
                      checked={answers.interests.includes(opt.value)}
                      onChange={() => handleQ4Change(opt.value)}
                      disabled={disabled}
                      className="accent-accent w-5 h-5"
                    />
                    {opt.label}
                  </label>
                );
              })}
            </div>
            {error && (
              <div className="text-red-600 mt-2 text-center font-medium" role="alert">
                {error}
              </div>
            )}
            <div className="flex w-full justify-between mt-4">
              <button
                type="button"
                className="modern-btn-link"
                onClick={() => setStep(2)}
              >
                ← Back
              </button>
              <button type="submit" className="modern-btn-primary">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .modern-btn-primary {
          background: #6366f1;
          color: #fff;
          font-weight: 600;
          border-radius: 0.75rem;
          padding: 0.75rem 2.5rem;
          font-size: 1.1rem;
          box-shadow: 0 2px 8px 0 rgba(99,102,241,0.08);
          border: none;
          transition: background 0.2s;
        }
        .modern-btn-primary:hover, .modern-btn-primary:focus {
          background: #4f46e5;
        }
        .modern-btn-secondary {
          background: #f3f4f6;
          color: #1a202c;
          font-weight: 500;
          border-radius: 0.75rem;
          padding: 0.75rem 2.5rem;
          font-size: 1.1rem;
          border: none;
          transition: background 0.2s;
        }
        .modern-btn-secondary:hover, .modern-btn-secondary:focus {
          background: #e5e7eb;
        }
        .modern-btn-link {
          background: none;
          color: #6366f1;
          font-weight: 500;
          border: none;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          text-decoration: underline;
        }
        .text-foreground { color: #1a202c; }
        .bg-accent { background: #6366f1; }
        .text-accent { color: #6366f1; }
        .accent-accent { accent-color: #6366f1; }
        @media (prefers-color-scheme: dark) {
          .text-foreground { color: #f3f4f6; }
          .bg-white { background: #18181b !important; }
          .modern-btn-secondary { background: #23272f; color: #f3f4f6; }
          .modern-btn-secondary:hover, .modern-btn-secondary:focus { background: #18181b; }
        }
      `}</style>
    </form>
  );
}