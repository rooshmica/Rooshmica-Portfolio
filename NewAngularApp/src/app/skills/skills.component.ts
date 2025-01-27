import { Component, OnInit } from '@angular/core';

// Define the SubSkill and SkillsSection interfaces
export interface SubSkill {
  title: string;
  description: string[];
}

export interface SkillsSection {
  heading: string;
  subSkills: (string | SubSkill)[];
}

export interface Skills {
  title: string;
  subTitle: string;
  skills: SkillsSection[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsSection: Skills = {
    title: "What I do👩‍💻",
    subTitle: "PASSIONATE FULL STACK .NET DEVELOPER WHO LOVES EXPLORING EVERY TECH STACK",
    skills: [
      {
        heading: "Core Tech Skills",
        subSkills: [
          {
            title: "💻 Full Stack Development",
            description: [
            "Proficient in both frontend and backend technologies to create end-to-end solutions.",
            "Experienced in building dynamic, single-page applications using Angular/React for frontend development.",
            "Skilled in HTML5, CSS3, and Bootstrap for responsive .",
            "Extensive experience with C# and .NET Core for backend development, creating secure and scalable backend services.",
            "Proficient in Entity Framework (EF) for ORM and data access management.",
            "Design and implement RESTful APIs and microservices for modern applications."
            ]
          },
          {
            title: "🤖 Machine Learning",
            description: [
            "Experience in machine learning and artificial intelligence.",
            "Expert in building and deploying machine learning models using Python, TensorFlow, Keras, and Scikit-learn.",
            "Experience with deep learning architectures like CNNs, RNNs, and GANs for image and sequence data processing.",
            "Familiar with cloud platforms like AWS, Google Cloud, and Azure for deploying scalable ML models.",
            "Proficient in using cloud AI services like AWS SageMaker, Google AI Platform, and Azure Machine Learning Studio.",
            "Skilled in model evaluation, hyperparameter tuning, and optimizing algorithms for production environments."
            ]
          }
        ]
      },
      {
        heading: "What I Can Do for You",
        subSkills: [
          "⚡ End-to-End Full-Stack Solutions with .NET Core",
          "⚡ Cloud Integration and Deployment",
          "⚡ Machine Learning and AI"
        ]
      },
      {
        heading: "Why Choose Me?",
        subSkills: [
          "💡 Full-Stack Expertise",
          "💼 Cloud & Data",
          "⚙️ Machine Learning Solutions",
          "💬 Client-Centric Approach",
          "🎓 Continuous Learning"
        ]
      }
    ]
  };

  ngOnInit(): void {
    // Initialization logic
  }

  // Type Guard to check if subSkill is an object with a 'title'
  isObjectWithTitle(subSkill: any): subSkill is SubSkill {
    return (subSkill as SubSkill).title !== undefined;
  }
}
