import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function ScheduleAppointment() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "sarah-shang-6byomw/30min",
        config: { layout: "month_view", theme: "auto" },
        buttonColor: "#e11717",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
}
