package letscode.logistic.controller;

import letscode.logistic.domain.Doctor;
import letscode.logistic.repo.DoctorRepo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/api/doctor")
public class DoctorRestController extends AbstractRestController<Doctor, DoctorRepo> {
    public DoctorRestController(DoctorRepo repo) {
        super(repo);
    }
}