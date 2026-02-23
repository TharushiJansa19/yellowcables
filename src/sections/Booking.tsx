import { useState } from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/layout/SectionHeader";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME"; // <-- paste yours

export default function Booking() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setStatus("error");
        setErrorMsg(json?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <section id="book" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeader
          title="Book an Appointment"
          subtitle="Send your request and we’ll get back to you with availability and next steps."
        />

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <Card className="p-0">
            <div className="p-6">
              <h3 className="text-xl font-bold">Request a booking</h3>
              <p className="mt-2 text-sm text-yc-g2">
                Tell us what you need and your preferred time. We’ll reply ASAP.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                {/* Formspree helpers */}
                <input type="hidden" name="source" value="YellowCables Website" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-yc-g3">Full name</label>
                    <Input name="name" required placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs text-yc-g3">Email</label>
                    <Input name="email" type="email" required placeholder="you@email.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-yc-g3">Service</label>
                    <Input
                      name="service"
                      required
                      placeholder="Website Development / 3D Printing / Mechatronics..."
                    />
                  </div>
                  <div>
                    <label className="text-xs text-yc-g3">Preferred date/time</label>
                    <Input name="preferred_time" placeholder="e.g., Tue 3pm or Weekend morning" />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-yc-g3">Project details</label>
                  <Textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Briefly describe what you want to build, deadlines, budget, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-xl bg-yc-yellow text-black font-semibold py-3 hover:brightness-110 transition disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Booking Request"}
                </button>

                {status === "success" ? (
                  <p className="text-sm text-yc-yellow">
                    ✅ Sent! We’ll reply to your email shortly.
                  </p>
                ) : null}

                {status === "error" ? (
                  <p className="text-sm text-red-300">
                    ❌ {errorMsg || "Failed to send. Please try again."}
                  </p>
                ) : null}
              </form>
            </div>
          </Card>

          <div className="rounded-2xl border border-white/5 bg-black/20 p-6">
            <h3 className="text-xl font-bold">What happens next?</h3>
            <ul className="mt-4 space-y-3 text-sm text-yc-g2">
              <li>• We review your request and reply with questions (if needed).</li>
              <li>• We confirm a time for a call / meeting.</li>
              <li>• You get a clear plan, timeline, and quote.</li>
            </ul>

            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-yc-dark2/30">
              <p className="text-sm text-yc-g2">
                Tip: If you have references (links, sketches, images), mention them in your message.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}