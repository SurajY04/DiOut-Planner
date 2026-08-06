import { useContext } from "react"
import { PlanContext } from "../services/plan.context"
import { createPlan, getPlan } from "../services/plan.api";
import { useNavigate } from "react-router-dom";

export const usePlan = () => {
    const context = useContext(PlanContext);
    const navigate = useNavigate();
    const { plan, setPlan, loading, setLoading, id, setId } = context;

    const handlePlanCreation = async ({ height, weight, gender, goal, isLactoseIntolerent, isVegetarian }) => {
        try {
            setLoading(true)
            const data = await createPlan({
                height,
                weight,
                gender,
                goal,
                isLactoseIntolerent,
                isVegetarian
            })
            console.log(data.weeklyPlanner.weeklyPlan)
            console.log(data)
            console.log(data.id)
            console.log(data._id)
            setId(data.id);
            console.log(id)
            navigate(`/get-plan/${data.weeklyPlanner._id}`)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }

    }

    const handleGetPlan = async (id) => {
        try {
            setLoading(true)
            const data = await getPlan(id)
            setPlan(data.plan.weeklyPlan)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return {loading , handlePlanCreation , handleGetPlan , plan}
}