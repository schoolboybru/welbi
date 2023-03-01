import { data } from "../../data.js";

export const residentResolvers = {
  Query: {
    residents: () => data.residents,
    resident: (_, args, __, ___) => {
        const resident = data.residents.find(r => r.userId === args.id);
        const hobbies = resident?.hobbies?.split(",");
        const levelOfCare = resident?.levelOfCare?.split(",");

        if (hobbies && levelOfCare) {
            const levelOfCarePrograms = data.programs.filter(p => p.levelsOfCare?.split(",").some(r => levelOfCare.indexOf(r) >=0));
            const hobbyPrograms = levelOfCarePrograms.filter(p => p.hobbies?.split(",").some(r => hobbies.indexOf(r) >= 0));

            const programs = hobbyPrograms;

            if (programs.length < args.limit) {
                for (let i = 0; i < levelOfCarePrograms.length; i++) {
                    if (programs.length >= args.limit) {
                        break;
                    }
                    const program = levelOfCarePrograms[i];
                    if (!programs.some(p => p.id === program.id)){
                        programs.push(program);
                    }
                }
            }
            return {...resident, programs: programs};
        }
    },
  },
}
