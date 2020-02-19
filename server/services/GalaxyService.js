import mongoose from "mongoose";
import Galaxy from "../models/Galaxy";

const _repository = mongoose.model("Galaxy", Galaxy);

class GalaxyService {
  async getAll() {
    return await _repository.find({});
  }
}

const galaxyService = new GalaxyService();
export default galaxyService;
